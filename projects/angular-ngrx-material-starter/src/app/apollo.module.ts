import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

const uri = 'https://graphql-voter-app.herokuapp.com/';

@NgModule({
  exports: [HttpClientModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri }),
      cache: new InMemoryCache(),
      resolvers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Post: {
          async isPublic(r, args, ctx) {
            console.log({ r, args, ctx });

            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(true);
              }, 500);
            });
          }
        }
      }
    });
  }
}
