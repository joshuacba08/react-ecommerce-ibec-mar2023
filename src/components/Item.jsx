import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img src={product.image} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          
          <Typography color="blue-gray" className="font-medium">
            <Link to={`/products/${product.id}`} >{product.productName}</Link>
          </Typography>

          <Typography color="blue-gray" className="font-medium">
            ${product.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {product.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
