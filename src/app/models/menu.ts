export interface MenuItem {
  text: string;
  heading?: boolean,
  link?: string,    // internal route links
  elink?: string,   // used only for external links
  target?: string,  // anchor target="_blank | _self | _top | framename"
  icon?: string,
  alert?: string,
  submenu?: Array<MenuItem>
  role?: Array<string>
}
