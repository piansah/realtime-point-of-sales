import DialogDelete from '@/components/common/dialog-delete';
import { Profile } from '@/types/auth';
import { startTransition, useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { INITIAL_STATE_ACTION } from '@/constants/general-constants';
import { deleteUser } from '../actions';


export default function DialogDeleteUser({
  open,
  refetch,
  currentData,
  handleChangeAction,
}: {
  refetch: () => void;
  currentData?: Profile;
  open: boolean;
  handleChangeAction: (open: boolean) => void;
}) {
  const [deleteUserState, deleteUserAction, isPendingDeleteUser] =
    useActionState(deleteUser, INITIAL_STATE_ACTION);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('id', currentData!.id as string);
    formData.append('avatar_url', currentData!.avatar_url as string);
    startTransition(() => {
      deleteUserAction(formData);
    });
  };

  useEffect(() => {
    if (deleteUserState?.status === 'error') {
      toast.error('Delete User Failed', {
        description: deleteUserState.errors?._form?.[0],
      });
    }

    if (deleteUserState?.status === 'success') {
      toast.success('Delete User Success');
      handleChangeAction?.(false);
      refetch();
    }
  }, [deleteUserState]);

  return (
    <DialogDelete
      open={open}
      onOpenChange={handleChangeAction}
      isLoading={isPendingDeleteUser}
      onSubmit={onSubmit}
      title="User"
    />
  );
}