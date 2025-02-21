"use client"

import { Button } from "@/src/components/ui/button";
import { Dialog, type BaseDialogProps } from "@/src/components/ui/dialog"
import { InputField } from "@/src/components/ui/input/field";
import { FormProvider, useForm } from "react-hook-form"

type FormData = {
  title: string;
}

export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>({
    defaultValues: {
      title: ""
    }
  });


  const onSubmit = async (data: FormData) => {
    console.log(data.title)
  }

  return(
    <Dialog 
    {...props}
    title="Criar novo grupo de flashcard"
    description="Para começar, escolha um título do seu grupo de flashcard"
    content={
      <FormProvider {...methods}>
        <form
        className="flex flex-col"
        onSubmit={methods.handleSubmit(onSubmit)}>
        <InputField
        label="Título"
        name="title"
        placeholder="Digite o titulo"
        required
        />

        <Button
        type="submit"
        className="w-max mt-6 ml-auto"
        >
          Criar
        </Button>
      </form>
      </FormProvider>
    }
    />
  )
}