<template>
   <div>
    <div>
      <template>
        <Form ref="formValidate"
              :model="formValidate"
              :rules="ruleValidate"
              :label-width="80">
          <FormItem label="名字"
                    prop="name">
            <Input v-model="formValidate.name"
                   placeholder="Enter your name"></Input>
          </FormItem>
          <FormItem label="邮箱"
                    prop="mail">
            <Input v-model="formValidate.mail"
                   placeholder="Enter your e-mail"></Input>
          </FormItem>
          <FormItem label="城市"
                    prop="city">
            <Select v-model="formValidate.city"
                    placeholder="选择所在城市">
              <Option value="beijing">北京</Option>
              <Option value="shanghai">上海</Option>
              <Option value="shenzhen">杭州</Option>
            </Select>
          </FormItem>
          <FormItem label="日期">
            <Row>
              <Col span="11">
              <FormItem prop="date">
                <DatePicker type="date"
                            placeholder="Select date"
                            v-model="formValidate.date"></DatePicker>
              </FormItem>
              </Col>
              <Col span="2"
                   style="text-align: center">-</Col>
              <Col span="11">
              <FormItem prop="time">
                <TimePicker type="time"
                            placeholder="Select time"
                            v-model="formValidate.time"></TimePicker>
              </FormItem>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="性别"
                    prop="gender">
            <RadioGroup v-model="formValidate.gender">
              <Radio label="male">男</Radio>
              <Radio label="female">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="爱好"
                    prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
              <Checkbox label="美食"></Checkbox>
              <Checkbox label="睡觉"></Checkbox>
              <Checkbox label="跑步"></Checkbox>
              <Checkbox label="电影"></Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem label="简介"
                    prop="desc">
            <Input v-model="formValidate.desc"
                   type="textarea"
                   :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem>
            <Button type="primary"
                    @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')"
                    style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>

<style scoped lang="less">
</style>
