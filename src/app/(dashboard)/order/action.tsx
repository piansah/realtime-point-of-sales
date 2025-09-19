'use server';

import { createClient } from '@/lib/supabase/server';
import { OrderFormState } from '@/types/order';
import { orderFormSchema } from '@/validations/order-validations';

export async function createOrder(
  prevState: OrderFormState,
  formData: FormData,
) {
  const validatedFields = orderFormSchema.safeParse({
    customer_name: formData.get('customer_name'),
    table_id: Number(formData.get('table_id')), // cast ke number
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  const supabase = await createClient();
  const orderId = `WPUCAFE-${Date.now()}`;

  // Jalankan step by step biar lebih aman
  const { error: orderError } = await supabase.from('orders').insert([{
    order_id: orderId,
    customer_name: validatedFields.data.customer_name,
    table_id: validatedFields.data.table_id,
    status: validatedFields.data.status,
  }]);

  if (orderError) {
    return {
      status: 'error',
      errors: {
        ...prevState.errors,
        _form: [orderError.message],
      },
    };
  }

  const { error: tableError } = await supabase
    .from('tables')
    .update({
      status:
        validatedFields.data.status === 'reserved'
          ? 'reserved'
          : 'unavailable',
    })
    .eq('id', validatedFields.data.table_id);

  if (tableError) {
    return {
      status: 'error',
      errors: {
        ...prevState.errors,
        _form: [tableError.message],
      },
    };
  }

  return {
    status: 'success',
    order_id: orderId,
  };
}
