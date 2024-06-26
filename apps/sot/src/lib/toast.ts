import { toast } from "@smarthub/ui";

export const successToast = (message: string) =>
    toast({
        duration: 2000,
        variant: "success",
        title: "Sucesso",
        description: message,
    });
export const errorToast = (message: string) =>
    toast({
        duration: 2000,
        variant: "destructive",
        title: "Erro",
        description: message,
    });
