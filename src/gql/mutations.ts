import { graphql } from './types'

// export const UPDATE_RISK = graphql(`
//   mutation UpdateRisk($input: UpdateRiskInput!, $withCategory: Boolean!) {
//     updateRisk(input: $input) {
//       id
//       name
//       description
//       resolved
//       category @include(if: $withCategory) {
//         id
//         name
//       }
//       createdBy
//     }
//   }
// `);

export const UPDATE_RISK_RESOLVED = graphql(`
  mutation UpdateRiskResolved($input: UpdateRiskInput!) {
    updateRisk(input: $input) {
      id
      resolved
    }
  }
`)

export const UPDATE_RISK_NAME = graphql(`
  mutation UpdateRiskName($input: UpdateRiskInput!) {
    updateRisk(input: $input) {
      id
      name
    }
  }
`)

export const UPDATE_RISK_DESCRIPTION = graphql(`
  mutation UpdateRiskDescription($input: UpdateRiskInput!) {
    updateRisk(input: $input) {
      id
      description
    }
  }
`)

export const DELETE_RISK = graphql(`
  mutation DeleteRisk($id: ID!) {
    deleteRisk(id: $id) {
      id
      isDeleted @client
    }
  }
`)

export const CREATE_RISK = graphql(`
  mutation CreateRisk($input: CreateRiskInput!) {
    createRisk(input: $input) {
      id
      name
      description
      resolved
      category {
        id
        name
      }
      createdBy
    }
  }
`)

export const DELETE_CATEGORY = graphql(`
  mutation DeleteCategory($id: ID!, $confirm: Boolean) {
    deleteCategory(id: $id, confirm: $confirm) {
      confirmationRequired
      message
      success
    }
  }
`)

export const CREATE_CATEGORY = graphql(`
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      id
      name
      description
      createdBy
    }
  }
`)
