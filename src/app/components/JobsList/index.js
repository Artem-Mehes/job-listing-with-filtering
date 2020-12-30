import React from 'react';
import data from '@constants/data';
import {
  Main,
  List,
  Item,
  Logo,
  Company,
  New,
  Featured,
  Header,
  Position,
  Footer,
} from './styles';

const JobsList = () => {
  return (
    <Main>
      <List>
        {data.map(
          ({
            id,
            position,
            logo,
            company,
            new: isNew,
            featured,
            postedAt,
            contract,
            location,
            role,
            level,
            languages,
            tools,
          }) => (
            <Item key={id}>
              <Logo src={logo} alt="logo" />
              <div>
                <Header>
                  <Company>{company}</Company>
                  {isNew && <New>new!</New>}
                  {featured && <Featured>featured</Featured>}
                </Header>
                <Position>{position}</Position>
                <Footer>
                  {[postedAt, contract, location].join(
                    ` ${String.fromCodePoint(9679)} `
                  )}
                </Footer>
              </div>
              <ul>
                {[role, level, ...languages, ...tools].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Item>
          )
        )}
      </List>
    </Main>
  );
};

export default JobsList;
