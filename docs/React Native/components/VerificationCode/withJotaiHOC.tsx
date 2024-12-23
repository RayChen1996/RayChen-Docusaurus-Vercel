import {Provider} from 'jotai';
import {createStore} from 'jotai/vanilla';
import React, {ComponentType, createElement} from 'react';

export default function withJotaiHOC<P extends object>(
  wrappedComponent: ComponentType<P>,
  store?: ReturnType<typeof createStore>,
) {
  const RenderComponent: React.FC<P> = props => {
    return (
      <Provider store={store}>
        {createElement(wrappedComponent, props)}
      </Provider>
    );
  };

  // 使用 displayName 屬性定義名稱，方便使用 devtool 除錯
  RenderComponent.displayName = `WithJotai(${getDisplayName(
    wrappedComponent,
  )})`;

  return RenderComponent;
}

function getDisplayName<P extends object>(WrappedComponent: ComponentType<P>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
