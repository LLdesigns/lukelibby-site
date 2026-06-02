type ImpactListProps = {
  items: string[]
  /** Stagger list items when wrapped in a cascade ScrollReveal */
  cascade?: boolean
}

export function ImpactList({ items, cascade = false }: ImpactListProps) {
  return (
    <ul className="cs-impact">
      {items.map((item) => (
        <li
          key={item}
          className={cascade ? 'cs-impact__item cascade-item' : 'cs-impact__item'}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
