import { JSX } from 'react'
import { AddIcon } from 'src/components/bosons'
import { IconProps } from './Icon.types'

const iconMap = {
  add: AddIcon
} as const

type IconName = keyof typeof iconMap

const Icon = ({
  name,
  width = 24,
  height = 24,
  ...props
}: IconProps): JSX.Element | null => {
  const SelectedIcon = iconMap[name as IconName]

  if (!SelectedIcon) return null

  return <SelectedIcon width={width} height={height} {...props} />
}

export default Icon
