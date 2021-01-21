import { Badge, Box, useTheme } from "@chakra-ui/react";
import useLocale from "hooks/useLocale";

interface LocaleButtonProps {
  colorScheme?: string;
  lang: string;
}

const LocaleButton = ({ colorScheme, lang }: LocaleButtonProps) => {
  const t = useTheme();
  const { setLocale } = useLocale();
  return (
    <Box
      as="button"
      outline="none"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      bg={t?.colors[`${colorScheme}`][200]}
      borderRadius={5}
      height={5}
      p={0}
      margin="3px 0"
      d="flex"
      justifyContent="center"
      alignItems="center"
      _hover={{ bg: `${colorScheme}.500`, color: `${colorScheme}.50` }}
      _active={{
        bg: `${colorScheme}.800`,
        transform: "scale(0.98)",
        outline: "none",
      }}
      onClick={() => setLocale(lang.toLowerCase())}
    >
      <Badge colorScheme={t?.colors[`${colorScheme}`][200]}>{lang.toUpperCase()}</Badge>
    </Box>
  );
};

export default LocaleButton;
