import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

interface FormVerificationProps {
  message?: string;
}

export const FormVerification = ({ message }: FormVerificationProps) => {
  if (!message) return null;

  return (
    <div className="bg-orange-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-orange-500">
      <QuestionMarkCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
