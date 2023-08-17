import { Text, Wrapper, WrapperArea } from '@/app/theme/sharedStyles';
import { SmallCard } from '@/components/SmallCard';
import Image from 'next/image';
import { AsideContainer, RightAlign } from './style';

export const Aside = () => {
  return (
    <AsideContainer>
      <WrapperArea>
        <RightAlign>
          <Image
            src="/logo.png"
            width={159}
            height={43}
            alt="Logo da ClickSoft"
          />
        </RightAlign>
        <Wrapper $biggerGap>
          <Text>Pesquisas Recentes:</Text>
          <SmallCard />
        </Wrapper>
      </WrapperArea>
    </AsideContainer>
  );
};
