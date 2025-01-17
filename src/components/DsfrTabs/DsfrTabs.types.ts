export type DsfrTabItemProps = {
  panelId: string
  tabId: string
  selected?: boolean
  icon?: string
}

export type DsfrTabContentProps = {
  asc?: boolean,
  selected?: boolean,
  panelId: string,
  tabId: string,
}

export type DsfrTabsProps = {
  tabListName: string
  tabTitles:(DsfrTabItemProps & { title: string })[]
  tabContents?: string[]
  initialSelectedIndex?: number
}
