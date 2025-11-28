<template>
    <footer>
        <p>
            Desenvolvido por Israel H. | {{ new Date().getFullYear() }} — Projeto fictício sem fins comerciais.
        </p>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    background: var(--verde-escuro);
    color: white;
    max-height: 65px;
    text-align: center;
    padding: 20px 110px;
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
