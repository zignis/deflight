import { deflight } from '../index';

const middlewareMock = jest.fn();
const nextFunctionMock = jest.fn();

describe('unit: deflight', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should bypass pre-flight requests', () => {
    deflight(middlewareMock)(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { method: 'OPTIONS' } as any,
      null,
      nextFunctionMock,
    );

    expect(middlewareMock).not.toHaveBeenCalled();
    expect(nextFunctionMock.mock.calls).toHaveLength(1);
  });

  it('should skip requests that are not pre-flight', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deflight(middlewareMock)({ method: 'GET' } as any, null, nextFunctionMock);

    expect(middlewareMock.mock.calls).toHaveLength(1);
    expect(nextFunctionMock).not.toHaveBeenCalled();
  });
});
