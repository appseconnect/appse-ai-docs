"use client";

import { Tab, Tabs as FumadocsTabs } from "fumadocs-ui/components/tabs";
import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

type TabItemProps = {
  value: string;
  label: string;
  children: ReactNode;
};

/** Docusaurus-compatible tab marker (content rendered by Tabs parent). */
export function TabItem(_props: TabItemProps) {
  return null;
}

/** Parses child TabItem elements into Fumadocs tabs. */
export function Tabs({ children }: { children: ReactNode }) {
  const items: string[] = [];
  const tabs: ReactElement[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement<TabItemProps>(child)) return;
    const label = child.props.label ?? child.props.value;
    const value = child.props.value ?? label;
    items.push(label);
    tabs.push(
      <Tab key={value} value={value}>
        {child.props.children}
      </Tab>,
    );
  });

  return <FumadocsTabs items={items}>{tabs}</FumadocsTabs>;
}
