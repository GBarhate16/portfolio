import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m" className={styles.mobileContainer}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
            paddingX="16"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column 
              textVariant="body-default-l" 
              fillWidth 
              gap="m" 
              marginBottom="xl"
              className={styles.mobileContainer}
            >
              <Text className={styles.justifiedText}>
                {about.intro.description}
              </Text>
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m" className={styles.justifiedHeading}>
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40" paddingX="16" className={styles.mobileContainer}>
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex 
                      fillWidth 
                      mobileDirection="column" 
                      horizontal="start" 
                      vertical="start" 
                      marginBottom="4"
                      gap="8"
                    >
                      <Text id={experience.company} variant="heading-strong-l" className={styles.justifiedHeading}>
                        {experience.company}
                      </Text>
                      <Text 
                        variant="heading-default-xs" 
                        onBackground="neutral-weak"
                        className={styles.justifiedText}
                        style={{
                          fontSize: 'var(--static-space-12)',
                          lineHeight: 'var(--static-space-16)',
                        }}
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m" className={styles.justifiedText}>
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16" className={styles.mobileList}>
                      {experience.achievements.map((achievement: React.ReactNode, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                          className={styles.justifiedListItem}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m" className={styles.justifiedHeading}>
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40" className={styles.mobileContainer}>
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l" className={styles.justifiedHeading}>
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak" className={styles.justifiedText}>
                      {institution.description}
                    </Text>
                    {institution.CGPA && (
                      <Text 
                        variant="body-default-s" 
                        onBackground="brand-weak"
                        className={styles.justifiedText}
                        style={{
                          fontSize: 'var(--static-space-11)',
                          lineHeight: 'var(--static-space-14)',
                        }}
                      >
                        CGPA: {institution.CGPA}
                      </Text>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

                     {about.technical.display && (
             <>
               <Heading
                 as="h2"
                 id={about.technical.title}
                 variant="display-strong-s"
                 marginBottom="40"
                 className={styles.justifiedHeading}
               >
                 {about.technical.title}
               </Heading>
               <Column fillWidth gap="l" className={styles.mobileContainer}>
                 <div className={styles.technicalSkills}>
                   {about.technical.skills.map((skill, index) => (
                     <div key={`${skill.title}-${index}`} className={styles.skillItem}>
                       <i className={skill.icon} style={{ fontSize: '3rem', color: 'var(--brand-weak)' }}></i>
                       <Text id={skill.title} variant="heading-default-s" className={styles.justifiedText}>{skill.title}</Text>
                     </div>
                   ))}
                 </div>
               </Column>
             </>
           )}
        </Column>
      </Flex>
    </Column>
  );
}
