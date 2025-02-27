import { JSX } from 'react'
import { Image, Icon } from 'src/components/atoms'
import { TableProps } from './Table.types'
import { Container, IconButton, Wrapper } from './Table.styles'

const Table = ({
  selectedTable,
  selectedMode,
  tableElements,
  handleSelectTableElement
}: TableProps): JSX.Element => (
  <Container>
    <Image src={selectedTable?.imageUrl} alt={selectedTable?.name} />
    {tableElements.map(({ id, x, y, type, element }) => (
      <Wrapper key={id} x={x} y={y} type={type}>
        {element ? (
          <Image src={element} alt="Element" />
        ) : type === selectedMode ? (
          <IconButton onClick={() => handleSelectTableElement(id, type)}>
            <Icon name="add" width={40} height={40} />
          </IconButton>
        ) : null}
      </Wrapper>
    ))}
  </Container>
)

export default Table
