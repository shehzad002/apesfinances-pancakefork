import React from 'react'
import useI18n from 'hooks/useI18n'
import { Round, BetPosition } from 'state/types'
import { useGetTotalIntervalBlocks } from 'state/hooks'
import { RoundResultBox } from '../RoundResult'
import MultiplierArrow from './MultiplierArrow'
import Card from './Card'
import CardHeader from './CardHeader'
import { CardBody, Flex, Spinner, WaitIcon } from '../../../../components/Pancakeswap/uikit/src'

interface CalculatingCardProps {
  round: Round
}

const CalculatingCard: React.FC<CalculatingCardProps> = ({ round }) => {
  const TranslateString = useI18n()
  const interval = useGetTotalIntervalBlocks()
  const estimatedEndBlock = round.startBlock + interval

  return (
    <Card>
      <CardHeader
        status="calculating"
        icon={<WaitIcon mr="4px" width="21px" />}
        title={TranslateString(999, 'Calculating')}
        epoch={round.epoch}
        blockNumber={estimatedEndBlock}
      />
      <CardBody p="16px">
        <MultiplierArrow isDisabled />
        <RoundResultBox>
          <Flex alignItems="center" justifyContent="center">
            <Spinner size={96} />
          </Flex>
        </RoundResultBox>
        <MultiplierArrow betPosition={BetPosition.BEAR} isDisabled />
      </CardBody>
    </Card>
  )
}

export default CalculatingCard
