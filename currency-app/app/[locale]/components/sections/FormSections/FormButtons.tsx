import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const FormButtons = () => {
  const t = useTranslations("Form");
  return (
    <>
      <div className="lg:hidden justify-center h-[50px] mt-10 px-5 order-4 lg:order-none">
        <Button fullWidth>
          <span className="text-white  pt-1">{t("button")}</span>
        </Button>
      </div>
    </>
  );
};

export default FormButtons;
