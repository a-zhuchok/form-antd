
import { Input, Button, Form, Select, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

function RegistrationForm() {

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { Option } = Select;

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (values) => {
    api.open({
      message: "Registered",
      description: JSON.stringify(values) ,
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };
    
  return (
    <div>
        <Form  
          onFinish={openNotification}
          onFinishFailed={onFinishFailed}
          style={{width: '400px', margin: 'auto', paddingTop:"40px"}}>
        <Form.Item 
          label="Username"
          name="userName" 
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}>
          <Input/>
        </Form.Item>
        
        <Form.Item 
          label="Email"
          name="userEmail" 
          rules={[
            {
             required: true,
             message: 'Please input your Email!',
            },
            {
             type: "email", 
             message:"This Email does not exist!"
            },
          ]}>
          <Input/>
        </Form.Item>

        <Form.Item 
          label="Password"
          name="userPassword" 
          rules={[
            {
             required: true,
             message: 'Please input your Password!',
            },
            { 
             min: 6,
             message: 'Password must be minimum 5 characters.', 
            },
          ]}>
          <Input.Password/>
        </Form.Item>

        <Form.Item 
          label="Password confirmation"
          name="userPasswordConfirmation" 
          dependencies={['userPassword']}
          rules={[
            {
             required: true,
             message: 'Please input your Password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('userPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}>
          <Input.Password/>
        </Form.Item>

        <Form.Item 
          label="Date of Birth"
          name="userBirthData" 
          rules={[
            {
             required: true,
             message: 'Please input your Date of Birth!',
            },
            { 
             type: "date",
             message: 'This Date does not exist!', 
            },
          ]}>
          <Input placeholder="DD/MM/YYYY"/>
        </Form.Item>
 
        <Form.Item 
          label="Gender"
          name="userGender" 
          rules={[
            {
             required: true,
             message: 'Please select your Gender!',
            },
          ]}>
          <Select placeholder="select your Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item 
          label="Phone Number"
          name="userPhoneNumber" 
          rules={[
            {
             required: true,
             message: 'Please input your Phone Number!',
            },
          ]}>
          <Input />
        </Form.Item>
        {contextHolder}
        <Button type="primary" htmlType="submit" style={{width: '400px'}} >Sign Up</Button>
      </Form>
    </div>   
    );
  }
  
  export default RegistrationForm;
