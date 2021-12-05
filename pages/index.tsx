import Layout from 'components/Layout';
import useLocale from 'hooks/useLocale';

import { ChangeEvent, SyntheticEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  useColorMode,
  useDisclosure,
  useToast,
  Kbd,
  Text,
  Icon,
} from '@chakra-ui/react';
import { EmailIcon, ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { GiDiamondsSmile, GiAngryEyes } from 'react-icons/gi';

export default function Home({ cookies }: any) {
  const { t } = useLocale();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>([]);
  const [isRequested, setRequested] = useState(false);
  const [isResetted, setResetted] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    handlePreCheck();
  }, []);

  useEffect(() => {
    setErrors([]);
  }, [isOpen]);

  const handleSubmit = async () => {
    if (validateField()) {
      setSubmitted(true);
      try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mail`, form);
        if (data.success) {
          toast({
            position: 'top-right',
            title: data.message,
            description: (
              <span>
                Thanks for reaching to me.<br></br> I will be responsing to you ASAP.
              </span>
            ),
            status: 'info',
            duration: 4000,
            isClosable: true,
          });
          handlePostSubmit();
        } else {
          throw new Error('Internal error. Try again later.');
        }
      } catch (error) {
        toast({
          position: 'top-right',
          title: 'Error',
          description: 'Please try again later.',
          status: 'warning',
          duration: 4000,
          isClosable: true,
        });
      }
      setSubmitted(false);
    }
  };

  const handlePostSubmit = () => {
    onClose();
    setForm({ name: '', email: '', message: '' });
    setRequested(true);
    localStorage.setItem('contact-request-sent', 'true');
  };

  const handlePreCheck = () => {
    if (localStorage.getItem('contact-request-sent') || null) setRequested(true);
    if (localStorage.getItem('contact-request-resetted') || null) setResetted(true);
    setResetCount(Number(localStorage?.getItem('contact-request-reset-count')) || 0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const validateField = () => {
    let error = [];
    if (!form.name) {
      error.push({ key: 'name', message: 'Name is required!' });
    }
    if (!form.email) {
      error.push({ key: 'email', message: 'Email is required!' });
    }
    if (!form.message) {
      error.push({ key: 'message', message: 'Message is required!' });
    }
    setErrors(error);
    error.length > 0 &&
      toast({
        position: 'top-right',
        title: 'Error',
        description: 'Fill all the required fields.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    return error.length > 0 ? false : true;
  };

  const resetRequest = () => {
    setResetCount(resetCount + 1);
    setRequested(false);
    localStorage.setItem('contact-request-resetted', 'true');
    localStorage.setItem('contact-request-reset-count', `${resetCount + 1}`);
    localStorage.removeItem('contact-request-sent');
  };

  return (
    <Layout pageTitle={t('welcome')}>
      <Box d="flex" flexDir="column" justifyContent="center" alignItems="center" h="95vh">
        {/* <Heading as="h3" size="lg">
        (lg) In love with React & Next
      </Heading> */}
        <Heading size="md" textAlign="center" color="blue.300">
          {t('hello')}
        </Heading>
        <br />
        <Kbd>i'm dou, you wanna reach me?</Kbd>
        <br />
        <Button
          rightIcon={isRequested ? <CheckCircleIcon /> : isResetted ? <GiAngryEyes /> : <GiDiamondsSmile />}
          colorScheme="blue"
          variant={isRequested ? 'solid' : 'outline'}
          onClick={onOpen}
          disabled={isRequested}
          size="xs"
        >
          {isRequested
            ? `You've already reached ${resetCount > 0 ? `${resetCount + 1} times` : ''}.`
            : isResetted
            ? 'Reach again pffs.'
            : 'Then reach'}
        </Button>
        {isRequested && (
          <Button rightIcon={<GiDiamondsSmile />} colorScheme="blue" variant="link" size="xs" marginTop={3} onClick={resetRequest}>
            not patient{resetCount > 0 ? ' still?' : '?'}
          </Button>
        )}
        {/* <Heading size="md" textAlign="center">
          {t('aboutme')}
        </Heading> */}
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" color="blue.300">
              What do you need mate?
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="name" isRequired>
              {/* <FormLabel>{t('name')}</FormLabel> */}
              <Input
                isInvalid={errors.find((item: any) => item.key === 'name')}
                focusBorderColor="blue.100"
                value={form.name}
                placeholder={t('name')}
                disabled={isSubmitted}
                onChange={handleChange}
              />
              <FormHelperText color="red.300">{errors.find((item: any) => item.key === 'name')?.message}</FormHelperText>
            </FormControl>

            <FormControl id="email" mt={4} isRequired>
              {/* <FormLabel>{t('email')}</FormLabel> */}
              <Input
                isInvalid={errors.find((item: any) => item.key === 'email')}
                focusBorderColor="blue.100"
                value={form.email}
                placeholder={t('email')}
                type="email"
                disabled={isSubmitted}
                onChange={handleChange}
              />
              <FormHelperText color="red.300">{errors.find((item: any) => item.key === 'email')?.message}</FormHelperText>
            </FormControl>

            <FormControl id="message" mt={4} isRequired>
              {/* <FormLabel>{t('message')}</FormLabel> */}
              <Textarea
                isInvalid={errors.find((item: any) => item.key === 'message')}
                focusBorderColor="blue.100"
                value={form.message}
                placeholder={t('message')}
                disabled={isSubmitted}
                size="sm"
                resize="none"
                onChange={handleChange}
              />{' '}
              <FormHelperText color="red.300">{errors.find((item: any) => item.key === 'message')?.message}</FormHelperText>
            </FormControl>

            <FormControl as="fieldset" id="emerg" mt={4} disabled={isSubmitted}>
              <FormHelperText marginBottom={2}>Priority ({t('priorityMessage')})</FormHelperText>
              <RadioGroup defaultValue="low">
                <HStack spacing="24px">
                  <Radio colorScheme="blue" value="low">
                    {t('low')}
                  </Radio>
                  <Radio colorScheme="blue" value="medium">
                    {t('medium')}
                  </Radio>
                  <Radio colorScheme="blue" value="high">
                    {t('high')}
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button disabled={isSubmitted} onClick={onClose} colorScheme="red" mr={3} variant="ghost">
              {t('cancel')}
            </Button>
            <Button isLoading={isSubmitted} colorScheme="blue" variant={isSubmitted ? 'solid' : 'outline'} onClick={handleSubmit}>
              {t('send')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
}
