import './index.scss'
import {useGetAllProductsQuery, useDeleteProductMutation} from "../../../services/apis/userApi.jsx";
import ProductCard from "../ProductCard/index.jsx";
import DrawerRight from "../DrawerRight/index.jsx";
import {message} from "antd";

function MainLayout() {
    const {data: getAllProducts, refetch} = useGetAllProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id).unwrap();
            message.success("Deleted successfully");
            refetch();
        } catch {
            message.error("Delete failed");
        }
    };

    return (
        <section id="mainLayout">
            <div className="nameAndBtn">
                <div className="container">
                    <div className="name">Products list</div>
                    <DrawerRight refetch={refetch}/>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {getAllProducts?.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MainLayout;
