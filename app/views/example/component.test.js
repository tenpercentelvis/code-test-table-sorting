
import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import Example from './component';

describe('Table', () => {

  let component;

  beforeEach(() => {

    component = shallow(
      <Example
        actions={{
          getData: () => {}
        }}
        example={{
          items: {
            columns: [ 
              {  property: 'id', label: 'id',  sortable: false  }, 
              {  property: 'name', label: 'name', sortable: true  }, 
              {  property: 'family', label: 'family', sortable: true  }, 
              {  property: 'city',  label: 'city' , sortable: true  }, 
              {  property: 'score',  label: 'score' , sortable: true  }
             ],
            rows: [ 
              {  id: 1,  name: 'jack', family: 'hanson',  city: 'sydney',  score: 200  }, 
              {  id: 2,  name: 'peter',  family: 'street',  city: 'melbourne', score: 100  }, 
              {  id: 3,  name: 'joe', family: 'larson',  city: 'brisbane',  score: 300   }, 
              {  id: 4,  name: 'simon',  family: 'long', city: 'perth',  score: 400   }, 
              {  id: 5,  name: 'abraham',  family: 'blue',  city: 'darwin',  score: 500  }
             ]
          }}}
      />
    );

  });

  it('Sort table', () => {


  });


});
