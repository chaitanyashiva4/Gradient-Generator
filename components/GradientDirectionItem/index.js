import {ListItem, DirectionButton} from './styledComponents'

const GradientItemDirection = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickGradientItemDirection = () => {
    clickGradientDirectionItem(value)
  }
  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientItemDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientItemDirection
