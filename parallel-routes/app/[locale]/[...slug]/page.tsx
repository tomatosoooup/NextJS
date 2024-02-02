import ComponentOne from "@/components/component-one";
import ComponentThree from "@/components/component-three";
import ComponentTwo from "@/components/component-two";
import ErrorPage from "@/components/error-page";

const componentsMap = {
  ["page_one"]: <ComponentOne />,
  ["page_two"]: <ComponentTwo />,
  ["page_three"]: <ComponentThree />,
};

export default function SlugPage({ params }: { params: { slug: string } }) {
  const firstSlugElement = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const selectedComponent = componentsMap[
    firstSlugElement as keyof typeof componentsMap
  ] ?? <ErrorPage />;

  return <div>{selectedComponent}</div>;
}
