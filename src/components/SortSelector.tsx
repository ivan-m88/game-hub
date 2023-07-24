import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrtder: (sortOder: string) => void;
}

export const SortSelector = ({ sortOrder, onSelectSortOrtder }: Props) => {
  const sortOrders = [
    { value: "", lablel: "Relevance" },
    { value: "-added", lablel: "Date Added" },
    { value: "name", lablel: "Name" },
    { value: "-released", lablel: "Release Date" },
    { value: "-matacritic", lablel: "Popularity" },
    { value: "-rating", lablel: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.lablel || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrtder(order.value)}
            key={order.value}
          >
            {order.lablel}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
