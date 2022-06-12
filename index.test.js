'use strict';

const main = require('./index');

describe('main', () => {
  it('Logs arguments', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    main(['Hello', 'World!']);

    expect(consoleLogSpy).toBeCalledWith({args: ['Hello', 'World!']});
  });
});