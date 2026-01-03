import "./index.scss";
import { Button, Drawer, Form, Input, InputNumber, message } from "antd";
import { useState } from "react";
import { useAddProductMutation } from "../../../services/apis/userApi.jsx";

function DrawerRight({ refetch }) {

    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const [addProduct, { isLoading }] = useAddProductMutation();

    const handleSave = async (values) => {
        try {
            await addProduct({
                title: values.title,
                price: Number(values.price),
                description: values.description,
                category: values.category,
                image: values.image
            }).unwrap();

            message.success("Product added successfully");

            await refetch();
            form.resetFields();
            setOpen(false);

        } catch (e) {
            message.error("Something went wrong, please try again");
        }
    };

    return (
        <section id="drawerRight">
            <Button type="primary" onClick={() => setOpen(true)} className="addBtn">
                Add product
            </Button>

            <Drawer
                title="Add product"
                placement="right"
                open={open}
                onClose={() => setOpen(false)}
                width={420}
            >
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={handleSave}
                >

                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            { required: true, message: "Title is required" },
                            { min: 3, message: "Title must be at least 3 characters" }
                        ]}
                    >
                        <Input placeholder="Product title" />
                    </Form.Item>

                    <Form.Item
                        label="Price ($)"
                        name="price"
                        rules={[
                            { required: true, message: "Price is required" },
                            { type: "number", min: 0.1, message: "Price must be greater than 0" }
                        ]}
                    >
                        <InputNumber
                            placeholder="Price"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            { required: true, message: "Description is required" },
                            { min: 10, message: "Description must be at least 10 characters" }
                        ]}
                    >
                        <Input.TextArea rows={3} placeholder="Short description" />
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[
                            { required: true, message: "Category is required" }
                        ]}
                    >
                        <Input placeholder="Category" />
                    </Form.Item>

                    <Form.Item
                        label="Image URL"
                        name="image"
                        rules={[
                            { required: true, message: "Image URL is required" },
                            { type: "url", message: "Please enter a valid URL (http://...)" }
                        ]}
                    >
                        <Input placeholder="https://example.com/image.png" />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                        block
                        className={"drawerSaveBtn"}
                    >
                        Save
                    </Button>

                </Form>
            </Drawer>
        </section>
    );
}

export default DrawerRight;
