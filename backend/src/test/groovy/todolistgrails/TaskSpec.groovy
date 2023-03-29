package todolistgrails

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class TaskSpec extends Specification implements DomainUnitTest<Task> {

    def setup() {
    }

    def cleanup() {
    }

    def "Criar uma tarefa"() {
        given:
        Task task = new Task(nome: "Tarefa 1", descricao: "Descrição da tarefa 1", dataTermino: new Date(),
                prioridade: 1, categoria: "Categoria 1", status: "A fazer")

        when:
        task.save flush: true

        then:
        task.id != null
    }

    def "Atualizar uma tarefa"() {
        given:
        Task task = new Task(nome: "Tarefa 1", descricao: "Descrição da tarefa 1", dataTermino: new Date(),
                prioridade: 1, categoria: "Categoria 1", status: "A fazer")
        task.save flush: true

        when:
        task.nome = "Tarefa 2"
        task.save flush: true

        then:
        task.nome == "Tarefa 2"
    }

    def "Listar tarefas"() {
        given:
        Task task = new Task(nome: "Tarefa 1", descricao: "Descrição da tarefa 1", dataTermino: new Date(),
                prioridade: 1, categoria: "Categoria 1", status: "A fazer")
        task.save flush: true

        when:
        List<Task> tasks = Task.list()

        then:
        tasks.size() == 1
    }

    def "Pegar um tarefa"() {
        given:
        def task = new Task(nome: "Tarefa 1", descricao: "Descrição da tarefa 1", dataTermino: new Date(),
                prioridade: 1, categoria: "Categoria 1", status: "A fazer")
        task.save flush: true

        when:
        Task task2 = Task.get(task.id)

        then:
        task2.id == task.id
    }

    def "Remover uma tarefa"() {
        given:
        Task task = new Task(nome: "Tarefa 1", descricao: "Descrição da tarefa 1", dataTermino: new Date(),
                prioridade: 1, categoria: "Categoria 1", status: "A fazer")
        task.save flush: true

        when:
        task.delete flush: true

        then:
        Task.get(task.id) == null
    }
}
