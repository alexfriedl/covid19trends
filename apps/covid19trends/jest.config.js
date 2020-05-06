module.exports = {
  name: 'covid19trends',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/covid19trends',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
