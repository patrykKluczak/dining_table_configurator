import { JSX } from 'react'
import { Image, Icon } from 'src/components/atoms'
import { TableProps } from './Table.types'
import { Container, IconButton, Wrapper } from './Table.styles'

const Table = ({
  selectedTable,
  selectedMode,
  tableElements,
  handleSelectTableElement,
  ...props
}: TableProps): JSX.Element => (
  <Container {...props}>
    <Image src={selectedTable?.imageUrl} alt={selectedTable?.name} />
    {tableElements.map(({ id, x, y, type, element }) => (
      <Wrapper key={id} x={x} y={y} type={type}>
        {element ? (
          <Image
            src={element}
            alt={`element-${type}-${id}`}
            data-testid="handle-select-table-element"
          />
        ) : type === selectedMode ? (
          <IconButton
            onClick={() => handleSelectTableElement(id, type)}
            data-testid={`handle-select-icon-${type}-${id}`}
          >
            <Icon name="add" width={40} height={40} />
          </IconButton>
        ) : null}
      </Wrapper>
    ))}
  </Container>
)

export default Table
