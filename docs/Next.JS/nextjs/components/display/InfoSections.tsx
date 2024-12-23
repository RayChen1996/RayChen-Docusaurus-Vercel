import React, { useCallback } from "react";
import clsx from "clsx";

import InfoFields, { type InfoFieldsProps } from "./InfoFields";
import InfoSection, { type InfoSectionProps } from "./InfoSection";

export interface InfoSectionsOption extends InfoSectionProps {
  optionsProps?: InfoFieldsProps;
}

export interface InfoSectionsProps
  extends Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "className" | "style"
  > {
  sections: InfoSectionsOption[];
}

export default function InfoSections({
  sections,
  className,
  ...props
}: InfoSectionsProps) {
  const _renderSection = useCallback(
    ({ optionsProps, ...item }: InfoSectionsOption, index: number) => {
      return (
        <InfoSection key={`section-${index}`} {...item}>
          <InfoFields {...optionsProps} />
        </InfoSection>
      );
    },
    [],
  );

  return (
    <div {...props} className={clsx("grid gap-4", className)}>
      {sections?.map(_renderSection)}
    </div>
  );
}
