import React,{useState} from 'react';
import { Form, Input, Button, Card,message } from 'antd';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AddCarPageCont = () => {
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);

    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
          const response = await axios.post('https://prickle-balanced-archaeopteryx.glitch.me/careerspage', values);
          console.log('Data submitted successfully:', response.data);
          message.success('careerspage Data submitted successfully');
          setRedirectToBlogs(true); // This triggers redirection
        } catch (error) {
          console.error('Error submitting form:', error);
          console.error('Error creating blog:', error);
          message.error('An error occurred ');
        }
      };

      if (redirectToBlogs) {
        return <Navigate to="/dashboard/ShowCareerPage" />;
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
          
            <Form.Item name="cultureheading" label="Culture Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="culturedescription" label="Culture Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
           
           
  
            <Form.Item name="nuggetoneheading" label="Nugget One Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>  
  
          
            <Form.Item name="nuggetonedescription" label="Nugget One Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
  
  
  
            <Form.Item name="nuggettwoheading" label="Nugget Two Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="nuggettwodescription" label="Nugget Two Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>


            <Form.Item name="nuggetthreeheading" label="Nugget Three Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="nuggetthreedescription" label="Nugget Three Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="nuggetfourheading" label="Nugget Four Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="nuggetfourdescription" label="Nugget Four Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>



            <Form.Item name="rewardheading" label="Reward Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="rewarddescription" label="Reward Description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="rewardone" label="Reward One" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="rewardtwo" label="Reward Two" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="rewardthree" label="Reward Three" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="rewardfour" label="Reward Four" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
           
  
          
            <Form.Item name="careerctaheading" label="Career Cta Heading" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="careerctadescription" label="Career Cta Description" rules={[{ required: true }]}>
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

export default AddCarPageCont;