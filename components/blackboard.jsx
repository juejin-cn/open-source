import React from 'react';
import { Card, Space, Avatar, Tag } from 'antd';
import {
  StarOutlined,
  BranchesOutlined,
  EyeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from '../public/styles/blackboard.css';

export default () => {
  return (
    <Card
      className={classes.githubCard}
      actions={[
        <IconText icon={EyeOutlined} text="2" key="EyeOutlined" />,
        <IconText icon={StarOutlined} text="156" key="StarOutlined" />,
        <IconText icon={BranchesOutlined} text="7" key="BranchesOutlined" />,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar
            size="large"
            src="https://avatars2.githubusercontent.com/u/12810740?s=200&v=4"
          />
        }
        title="element-ui"
        description="A Vue.js 2.0 UI Toolkit for Web"
      />
      <div className={classes.tagView}>
        <Tag className={classes.tagLine} color="volcano">
          vue
        </Tag>
        <Tag className={classes.tagLine} color="orange">
          javascript
        </Tag>
        <Tag className={classes.tagLine} color="gold">
          vuejs
        </Tag>
        <Tag className={classes.tagLine} color="lime">
          ui design
        </Tag>
        <Tag className={classes.tagLine} color="green">
          open source
        </Tag>
        <Tag className={classes.tagLine} color="cyan">
          vue-component
        </Tag>
        <Tag className={classes.tagLine} color="blue">
          ui-kit
        </Tag>
        <Tag className={classes.tagLine} color="geekblue">
          element-ui
        </Tag>
        <Tag className={classes.tagLine} color="purple">
          desktop
        </Tag>
      </div>
    </Card>
  );
};

/**
 *
 * @param {  } param0
 */
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
