import { useMediaQuery as useChakraQuery } from '@chakra-ui/react';

const useMediaQuery = () => {
  const [isXs] = useChakraQuery('(max-width: 299.98px)');
  const [isSm] = useChakraQuery('(max-width: 575.98px)');
  const [isMd] = useChakraQuery('(max-width: 991.98px)');
  const [isLg] = useChakraQuery('(min-width: 992px)');

  return {
    isXs,
    isSm,
    isMd,
    isLg,
  };
};

export default useMediaQuery;
