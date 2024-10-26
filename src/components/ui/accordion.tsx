import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import "../../styles/accordion.css";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
  children: React.ReactNode;
  className?: string;
}

const AccordionDemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" collapsible>
    <Accordion.Item className="AccordionItem item-1" value="item-1">
      <AccordionTrigger>
        What is the difference between a UI and UX Designer?
      </AccordionTrigger>
      <AccordionContent>
        This is just a dummy text that has been inserted as a placeholder for
        future content. While it may seem insignificant at first glance, the use
        of dummy text is a common practice in the design and publishing
        industry, as it allows designers and developers to visualize the layout
        and overall aesthetic of a project without being distracted by the
        actual content.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem item-2" value="item-2">
      <AccordionTrigger>How to become a UI designer?</AccordionTrigger>
      <AccordionContent>
        This is just a dummy text that has been inserted as a placeholder for
        future content. While it may seem insignificant at first glance, the use
        of dummy text is a common practice in the design and publishing
        industry, as it allows designers and developers to visualize the layout
        and overall aesthetic of a project without being distracted by the
        actual content.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem item-3" value="item-3">
      <AccordionTrigger>What is the best UI design tool?</AccordionTrigger>
      <AccordionContent>
        This is just a dummy text that has been inserted as a placeholder for
        future content. While it may seem insignificant at first glance, the use
        of dummy text is a common practice in the design and publishing
        industry, as it allows designers and developers to visualize the layout
        and overall aesthetic of a project without being distracted by the
        actual content.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem item-4" value="item-4">
      <AccordionTrigger>
        What is the best place to learn Figma?
      </AccordionTrigger>
      <AccordionContent>
        This is just a dummy text that has been inserted as a placeholder for
        future content. While it may seem insignificant at first glance, the use
        of dummy text is a common practice in the design and publishing
        industry, as it allows designers and developers to visualize the layout
        and overall aesthetic of a project without being distracted by the
        actual content.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem item-5" value="item-5">
      <AccordionTrigger>Should designers code?</AccordionTrigger>
      <AccordionContent>
        This is just a dummy text that has been inserted as a placeholder for
        future content. While it may seem insignificant at first glance, the use
        of dummy text is a common practice in the design and publishing
        industry, as it allows designers and developers to visualize the layout
        and overall aesthetic of a project without being distracted by the
        actual content.
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={`AccordionTrigger ${className || ""}`}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={`AccordionContent ${className || ""}`}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";

export default AccordionDemo;
