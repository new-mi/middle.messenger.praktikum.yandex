import modal from "../components/modal";
import boxModal from "../components/boxModal";
import inputGroup from "../components/inputGroup";
import button from "../components/button";
import inputUploadFile from "../components/inputUploadFile";
import {renderInDOM} from "../utils/render";

const template = modal.render({
  contentList: [
    {
      id: modal.data.addUser.id,
      content: boxModal.render({
        ...modal.data.addUser,
        contentMain: inputGroup.render(inputGroup.data.login),
        contentActions: button.render(button.data.addUser)
      })
    },
    {
      id: modal.data.removeUser.id,
      content: boxModal.render({
        ...modal.data.removeUser,
        contentMain: inputGroup.render(inputGroup.data.login),
        contentActions: button.render(button.data.addUser)
      })
    },
    {
      id: modal.data.uploadFile.id,
      content: boxModal.render({
        ...modal.data.uploadFile,
        contentMain: inputUploadFile.render({
          contentLabel: 'Выбрать файл на компьютере',
          name: 'avatar'
        }),
        contentActions: button.render(button.data.uploadFile)
      })
    },
    {
      id: modal.data.removeChat.id,
      content: boxModal.render({
        ...modal.data.removeChat,
        contentMain: '',
        contentActions: button.render(button.data.removeChat)
      })
    }
  ]
})

renderInDOM(document.querySelector('#modal'), template)
