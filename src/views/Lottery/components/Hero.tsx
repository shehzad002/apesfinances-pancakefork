import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'
import { Heading, Text, LinkExternal } from '../../../components/Pancakeswap/uikit/src'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: #ffffff;
  margin-bottom: 24px;
  text-shadow: 2px 2px 2px #00000040;
`

const ComeBack = styled(Text)`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  font-size: 24px;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledHero = styled.div`
  background-image: linear-gradient(#3e3e3e,#252322);
  max-height: max-content;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: 256px;
  }
`

const StyledContainer = styled(Container)`
  display: flex;

  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;
  padding-bottom: 40px;
  padding-top: 40px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 0;

  & img {
    width: 80%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    padding-left: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 32px;
    & img {
      margin-top: -25px;
    }
  }
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        <LeftWrapper>
          <Title>{TranslateString(999, 'The Lottery Is Changing!')}</Title>
          <ComeBack>{TranslateString(999, 'Come back soon!')}</ComeBack>
          <LinkExternal
            bold
            mt={20}
            external
            href="https://voting.pancakeswap.finance/#/pancake/proposal/QmU8pcbmBrfbfVQXMMxmkExDq3mYq4s5cbBuFe6uCZzdmX"
          >
            {TranslateString(999, 'Learn more')}
          </LinkExternal>
        </LeftWrapper>
        <RightWrapper>
          <img src="/images/tombola.png" alt="lottery bunny" />
        </RightWrapper>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
