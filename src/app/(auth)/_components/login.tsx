"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { LoginForm, LoginSchema } from "@/validations/auth-validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "@/components/common/form-input";

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">Login</CardTitle>
        <CardDescription>Login to access all features.</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => console.log(data))}>
            <FormInput
              form={form}
              name="email"
              label="Email"
              placeholder="Insert email here"
              type="email"
            />
            <FormInput
              form={form}
              name="password"
              label="Password"
              placeholder="Insert password here"
              type="password"
            />

            {/* Actions */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <Button
                type="submit"
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Login
              </Button>
              <Button
                type="submit"
                variant="outline"
                className="w-full px-4 py-2 text-sm font-semibold"
              >
                Register
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
