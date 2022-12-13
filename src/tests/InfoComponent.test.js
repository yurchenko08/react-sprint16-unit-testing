import TestRenderer from 'react-test-renderer';
import Info from '../components/Info';
import React from 'react';

describe('unit tests for comnonent Info', () => {
  let componentInfo;

  beforeEach(() => {
    componentInfo = TestRenderer.create(<Info user='yurkovskiy' />);
  });

  it('Render corectly', () => {
    expect(componentInfo.toJSON()).toMatchSnapshot();
  });

  it('Test props', () => {
    const testInstance = componentInfo.toTree();
    expect(testInstance.props.user).toEqual('yurkovskiy');
  });
});
