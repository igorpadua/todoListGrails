package todolistgrails

import grails.rest.Resource

@Resource(uri="/tasks")
class Task {

    Long id
    String nome
    String descricao
    Date dataTermino
    Short prioridade
    String categoria
    String status

    static constraints = {
        nome(blank: false, nullable: false)
        descricao(blank: false, nullable: false)
        dataTermino(blank: false, nullable: false)
        prioridade(blank: false, nullable: false)
        categoria(blank: false, nullable: false)
        status(blank: false, nullable: false)
    }
}
