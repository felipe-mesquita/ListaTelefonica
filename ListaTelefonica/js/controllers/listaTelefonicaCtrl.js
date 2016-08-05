angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope){
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
        {nome: "pedro da SILVA ", telefone: "1111-1111", cor: "blue", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Ana", telefone: "2222-2222", cor: "yellow", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
        {nome: "Maria", telefone: "3333-3333", cor: "red", data: new Date(), operadora: {nome: "Embratel", codigo: 21, categoria: "Fixo"}}
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 1},
        {nome: "Claro", codigo: 11, categoria: "Celular", preco: 1},                    
        {nome: "GVT", codigo: 51, categoria: "Fixo", preco: 3},                    
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2},                    
    ];
    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContato = function(contatos){
        $scope.contatos = contatos.filter(function (contato){
            if(!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function(campo){
        $scope.ordenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});