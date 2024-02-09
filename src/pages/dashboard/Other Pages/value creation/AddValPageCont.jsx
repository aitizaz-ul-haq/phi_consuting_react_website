import React,{useState} from 'react';
import { Form, Input, Button, Card,message } from 'antd';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const AddValPageCont = () => {
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);

    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
          const response = await axios.post('https://prickle-balanced-archaeopteryx.glitch.me/valuecreationpage', values);
          console.log('Data submitted successfully:', response.data);
          message.success('valuecreationpage Data submitted successfully');
          setRedirectToBlogs(true); // This triggers redirection
        } catch (error) {
          console.error('Error submitting form:', error);
          console.error('Error creating blog:', error);
          message.error('An error occurred ');
        }
      };

      if (redirectToBlogs) {
        return <Navigate to="/dashboard/ShowSValuecPage" />;
    }
    
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: '60%' }}>
          <Form
            name="homepageContent"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            style={{ width: '60%', margin: '0 auto' }}
          >
             <Form.Item name="heroheading" label="Hero Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="herodescription" label="Hero Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
          
            <Form.Item name="valuecreationheading" label="Value Creation Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="valuecreationdescription" label="Value Creation Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
           
           
  
            <Form.Item name="phicreatesheading" label="Phi Creates Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>  
  
            <Form.Item name="ourwayoneheading" label="Our Way One Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="ourwayonedescription" label="Our Way One Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
  
  
  
            <Form.Item name="ourwaytwoheading" label="Our Way Two Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="ourwaytwodescription" label="Our Way Two Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>



            
            <Form.Item name="ourwaythreeheading" label="Our Way Three Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="ourwaythreedescription" label="Our Way Three Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
  
          
            <Form.Item name="ctaheading" label="Val Cta Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="ctadescription" label="Val Cta Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            
            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
}

export default AddValPageCont;