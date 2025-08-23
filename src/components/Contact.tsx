"use client";

import React from "react";
import { Column, Flex, Heading, Text, Button, Icon } from "@once-ui-system/core";

interface ContactProps {
  contact: {
    title: string;
    description: string;
    email: string;
    linkedin: string;
    github: string;
  };
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <Column
      fillWidth
      paddingY="xl"
      paddingX="l"
      background="brand-alpha-weak"
      border="brand-alpha-medium"
      radius="m"
      gap="l"
      horizontal="center"
      style={{
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Column maxWidth="s" gap="m" horizontal="center">
        <Heading variant="display-strong-s">
          {contact.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {contact.description}
        </Text>
      </Column>
      
      <Flex gap="m" wrap horizontal="center">
        <Button
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=Hello from your portfolio&body=I'd like to get in touch with you.`}
          variant="primary"
          size="m"
          prefixIcon="email"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Send Email
        </Button>
        
        <Button
          href={contact.linkedin}
          variant="secondary"
          size="m"
          prefixIcon="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          LinkedIn
        </Button>
        
        <Button
          href={contact.github}
          variant="secondary"
          size="m"
          prefixIcon="github"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          GitHub
        </Button>
      </Flex>
    </Column>
  );
};
