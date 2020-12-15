/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const state = {
    query: '',
    results: [],
    error: {}
    }

const getters = {
    getResults(state){
        console.log(state.results.length)
        return state.results
    },
    getError(state){
        console.log(state.error.message)
        return state.error
    }
}
    
const actions = {
    saveQuery( {commit }, payload){
        commit('SAVE_QUERY', payload)
    },
    setResults( {commit }, payload){
        commit('SET_RESULTS', payload)
    },
    async sendAPICall( { commit }) {
        let found = []
        await axios
            .get('https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com/product?q=' + state.query)
            .then(res => found = res.data)
            .catch(error => state.error = error.message) 
            
        commit('SET_RESULTS', found)
            
        }
    
    
    }
    
const mutations = {
    SAVE_QUERY(state, payload) {
        state.query = payload
        console.log(state.query)  
    },
    SET_RESULTS(state, payload) {
        state.results = payload
    }
    
}
    

export const store = new Vuex.Store({ state, getters, actions, mutations })