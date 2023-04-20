import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContact } from './App.styled';

export default function Loader() {
  return (
    <LoaderContact>
      <MagnifyingGlass
        height="100"
        width="100"
        radius="1000"
        color="black"
        ariaLabel="watch-loading"
        wrapperStyle={{ justifyContent: 'center', margin: '200px 0' }}
        visible={true}
      />
    </LoaderContact>
  );
}
