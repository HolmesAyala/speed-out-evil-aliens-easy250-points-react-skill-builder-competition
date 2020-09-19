import React from 'react';
import SpeedCounter from './SpeedCounter';
import Layout from '../../components/Layout/Layout';

const title = 'Speed Counter';

export default function action() {
  return {
    chunks: ['speed-counter'],
    title,
    component: (
      <Layout>
        <SpeedCounter title={title} />
      </Layout>
    ),
  };
}
