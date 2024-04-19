import { useContext } from "react";

import NewOrderContext from "../contextes/new-order.context";

const useNewOrder = () => useContext(NewOrderContext);

export default useNewOrder;
