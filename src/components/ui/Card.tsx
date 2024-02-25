import { CardBody, CardFooter, Card as MTCard } from "@material-tailwind/react";

export function Card({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <MTCard placeholder={""} className="mt-6 w-full">
      <CardBody placeholder={""}>{children}</CardBody>
      <CardFooter placeholder={""} className="pt-0">
        {footer}
      </CardFooter>
    </MTCard>
  );
}
